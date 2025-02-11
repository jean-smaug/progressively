import * as Joi from 'joi';

export interface CheckoutCreationDTO {
  priceId: string;
}

export const CheckoutCreationSchema = Joi.object({
  priceId: Joi.string().required(),
});

export enum PlanStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
