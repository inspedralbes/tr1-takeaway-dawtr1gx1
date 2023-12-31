<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;
use Illuminate\Mail\Mailables\Attachment;

class MyTestEmail extends Mailable
{
    use Queueable, SerializesModels;
    public $data;

    /**
     * Create a new message instance.

     *
     * @param  string  $name
     * @param  int  $comandaId

     * @return void
     */
    public function __construct($newOrder, $pdf)
{
    $this->data["dades"] = $newOrder;
    $this->data["pdf"] = $pdf;
}

public function content()
{
    return new Content(
        view: 'mail.test-email',
        
    );
}

    /**
     * Get the message envelope.
     *
     * @return \Illuminate\Mail\Mailables\Envelope
     */
    public function envelope()
    {
        return new Envelope(
            subject: 'My Test Email',
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        return [
            Attachment::fromData(fn () => $this->data["pdf"]->output(), 'Ticket.pdf')
            ->withMime('application/pdf'),
        ];
    }

}

