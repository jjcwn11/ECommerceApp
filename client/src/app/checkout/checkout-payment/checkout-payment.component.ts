import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasketService } from 'src/app/basket/basket.service';
import { CheckoutService } from '../checkout.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IOrder } from 'src/app/shared/models/order';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.scss']
})
export class CheckoutPaymentComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor(
    private basketService: BasketService,
    private checkoutService: CheckoutService,  
    private router: Router) { }

  ngOnInit() {
  }

  submitOrder() {
    const basket = this.basketService.getCurrentBasketValue();
    const orderToCreate = this.getOrderToCreate(basket);
    // console.log('The basket = ' + basket);
    console.log('Order created successfully');
    this.checkoutService.creatOrder(orderToCreate).subscribe((order: IOrder) => {
     this.basketService.deleteLocalBasket(basket.id);
     const navigationExtras: NavigationExtras = {state: order};
     this.router.navigate(['checkout/success'], navigationExtras);
    }, error => {   
      console.log(error);
    });
  }

  private getOrderToCreate(basket: IBasket) {
    console.log(basket);

    return {
      basketId: basket.id,
      deliveryMethodId: +this.checkoutForm.get('deliveryForm').get('deliveryMethod').value,
      shipToAddress: this.checkoutForm.get('addressForm').value
    };
  }

}