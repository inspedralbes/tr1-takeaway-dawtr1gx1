<?php

namespace App\Http\Controllers;

use App\Mail\MyTestEmail;
use App\Models\order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use PDF;
use Illuminate\Support\Facades\Mail;
use SimpleSoftwareIO\QrCode\Facades\QrCode;

class orderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return order::all();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Generate PDF 
     */
    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'jsonOrder' => 'required',
            'totalPrice' => 'required',
            'mail' => 'required|email',
        ]);

        $jsonOrder = json_decode($request->jsonOrder, true);
        $allAmountsValid = true;

        if ($validator->fails()) {
            return response()->json(['errorMsg' => "Email incorrecte", 'errorCode' => 2], 422);
        } else {

  foreach ($jsonOrder['order'] as $orderItem) {
                if ($orderItem['amount'] <= 0) {
                    $allAmountsValid = false;

                    //array_splice($jsonOrder['order'], $orderItem, 1);
                    return response()->json(['errorCode' => 2, 'errorMsg' => "No pots fer compres negatives"]);
                }
                $itemFromDb  = items::find($orderItem['id']);
                $totalPrice=0;
                if ($itemFromDb ) {
                    // Calcular el totalPrice sumando el precio * amount
                    $totalPrice += $itemFromDb ->price * $orderItem['amount'];
                    
                }
            }

            $jsonOrder['order'] = array_values($jsonOrder['order']);

            if ($allAmountsValid) {
                $newOrder = new Order;
                $newOrder->jsonOrder = $request->jsonOrder;
                $newOrder->totalPrice = $totalPrice;
                $newOrder->mail = $request->mail;
                $newOrder->save();


                $jsonDecoded = json_decode($request->jsonOrder);
                foreach ($jsonDecoded->order as $item) {
                    $dish = items::find($item->id);
                    $dish->stock = $dish->stock - $item->amount;
                    $dish->save();
                }

                  $qr = base64_encode(QrCode::format('svg')->size(150)->errorCorrection('H')->generate($newOrder->jsonOrder));
                   $newOrder->qr = $qr;
            

                  $pdf = \Barryvdh\DomPDF\Facade\Pdf::loadView('pdf', compact("newOrder"));
            
            Mail::to($newOrder->mail)->send(new MyTestEmail($newOrder, $pdf));
            
            return response()->json(['errorCode'=> 3]);
            } else {
                return response()->json(['errorCode' => 2, "Amount incorrecte"]);
           
            
          
            


            
            }

        }
    }



    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //return order::all()->where("id","==",$id);
        //$ret = order::all()->where("id","==",$id);
        $ret = order::find($id);

        if (!$ret) {
            $ret = array("status" => "No sa'ha trobat comanda amb aquesta id");
            json_encode($ret);
        }
        return $ret;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $order = order::find($id);
        $order->status = $request->status;
        $order->save();

        return redirect()->route('detall', ['id' => $order->id]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
