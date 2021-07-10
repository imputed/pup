// @flow

class Transaction {
    sender: string
    recipient: string
    amount: number
    timestamp: Date

    constructor(sender:string, recipient:string, amount:number) {
        this.sender = sender
        this.recipient = recipient
        this.amount = amount
        this.timestamp = new Date()
    }
}

module.exports = Transaction