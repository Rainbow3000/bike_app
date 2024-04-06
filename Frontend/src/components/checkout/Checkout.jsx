import React, { useState } from 'react';
import {useNavigate } from 'react-router-dom'
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import {createOrderUser,createOrderEnd} from '../../store/slice/orderSlice'
import {useDispatch} from 'react-redux'

const Checkout = ({userId,email,product,totalOrder,orderDate}) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const dispatcher  = useDispatch(); 
    const navigate = useNavigate(); 
    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    }

    const onCreateOrder = (data,actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: Math.floor(totalOrder / 240000),
                    },
                },
            ],
        });
    }

    const onApproveOrder = (data,actions) => {
        return actions.order.capture().then((details) => {
            const name = details.payer.name.given_name;
            dispatcher(createOrderUser({
                userName:name, 
                userId, 
                methodPay:'Thanh toán online',
                email,
                product,
                totalOrder,
                orderDate,
                resultOrder:'success'
            }))
            alert('Bạn đã đặt hàng thành công !');
            navigate('/');
        });
    }

    return (
    
        <div className="checkout">
          
                    <PayPalButtons 
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                 
        </div>
    );
}

export default Checkout;