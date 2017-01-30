export var order = {
  data: {
    transactions: [{
      amount: {
        total: 10,
        currency: "CA",
        details: {
          subtotal: 8,
          tax: 2
        }
      },
      item_list: {
        items: [{
          name: "Bijoux",
          description: "diamant",
          price: 8,
          quantity: 1,
          currency: "CA"
        }]
      },
      shipping_address: {
        recipient_name: "Alain",
        line1: "8140 La Fomtaine",
        line2: "app2",
        city: "Montreal",
        country_code: "CA",
        phone: "555 555-5555",
        state: "QC"
      }

    }],
    payment: {
      id: "333"
    },

  }/**
   * Created by Alain on 2017-01-15.
   */
}
