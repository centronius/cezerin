import React from 'react'
import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../containerProps'
import {CheckoutContainer, config} from 'theme'
import CheckoutForm from '../components/checkoutForm'

const ConnectedCheckoutContainer = connect(mapStateToProps, mapDispatchToProps)(CheckoutContainer);

export default() => {
  return <ConnectedCheckoutContainer checkoutForm={<CheckoutForm
    inputClassName={config.checkout_input_class}
    buttonClassName={config.checkout_button_class}
  />} />
}
