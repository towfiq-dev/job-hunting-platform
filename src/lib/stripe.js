import 'server-only'

import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export const PLAN_PRICE_ID = {
    'seeker_pro': 'price_1TfwG9ALVFAB1vvMYnnJQKUl',
    'seeker_premium': 'price_1TfzupALVFAB1vvM4RRBxDt3',
    'recruiter_growth': 'price_1Tfzw8ALVFAB1vvMbnyLx0MF',
    'recruiter_enterprise': 'price_1TfzxZALVFAB1vvMG8rFfkNU'
}