import { connect } from 'react-redux'
import { push } from 'react-router-redux';
import { fetchShippingMethod, updateShippingMethod, createShippingMethod, receiveShippingMethod } from '../actions'
import Form from './components/form'

const mapStateToProps = (state) => {
  return {
    settings: state.settings.settings,
    initialValues: state.settings.shippingMethodEdit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoad: (methodId) => {
      if(methodId) {
        dispatch(fetchShippingMethod(methodId))
      } else {
        dispatch(receiveShippingMethod({ enabled: false }));
      }
    },
    onSubmit: (method) => {
      if(method.conditions) {
        if(method.conditions.countries && !Array.isArray(method.conditions.countries)) {
          const countriesStr = method.conditions.countries;
          method.conditions.countries = countriesStr.split(',').map(item => item.trim().toUpperCase()).filter(item => item.length === 2);
        }

        if(method.conditions.states && !Array.isArray(method.conditions.states)) {
          const statesStr = method.conditions.states;
          method.conditions.states = statesStr.split(',').map(item => item.trim());
        }

        if(method.conditions.cities && !Array.isArray(method.conditions.cities)) {
          const citiesStr = method.conditions.cities;
          method.conditions.cities = citiesStr.split(',').map(item => item.trim());
        }
      }

      if(method.id) {
        dispatch(updateShippingMethod(method));
      } else {
        dispatch(createShippingMethod(method));
        dispatch(push('/admin/settings/shipping'));
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
