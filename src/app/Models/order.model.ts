export interface Order{
  data: {
    transactions: [{
      amount: {
        total: number,
        currency: string,
        details: {
          subtotal:number,
          tax:number
        }
      },
      item_list: {
        items: [{
          name: string,
          description: string,
          price: number,
          quantity:  number,
          currency:  string
        }]
      },
      shipping_address: {
        recipient_name:  string,
        line1: string,
        line2: string,
        city: string,
        country_code: string,
        phone: string,
        state: string
      }

    }],
    payment: {
      id: string
    },
    created: string
  }

}/**
 * Created by Alain on 2017-01-12.
 */
