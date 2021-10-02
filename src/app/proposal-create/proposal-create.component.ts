import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-proposal-create',
  templateUrl: './proposal-create.component.html',
  styleUrls: ['./proposal-create.component.scss']
})
export class ProposalCreateComponent implements OnInit {
  formProposal: FormGroup;
  errorMessage: string;
  strikeCheckout:any = null;
  constructor(private formBuilder: FormBuilder,

              private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm() {
    this.formProposal = this.formBuilder.group({
      value: ['', [Validators.required]],

    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.formProposal.controls; }
  onSubmit() {
    const value = this.formProposal.get('value').value;


    /*this.authService.createNewUser(email, password).then(
      () => {
        this.router.navigate(['/books']);
      },
      (error) => {
        this.errorMessage = error;
      }
    );*/
  }
  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(s);
    }
}
  checkout() {
    const strikeCheckout = (<any>window).StripeCheckout.configure({
      key:  environment.STRIPE_KEY,
      locale: 'auto',
      token:  (stripeToken: any) => {
        if(stripeToken){
          console.log(stripeToken)
          //this.productService.createPayment(stripeToken,amount)
        }
      }
    });

    strikeCheckout.open({
      name: 'Green repack',
      description: 'Paiement sur green repack',
      amount: 320
    });

  }
  initiateCardElement() {
    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      script.onload = () => {
        this.strikeCheckout = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51H7bbSE2RcKvfXD4DZhu',
          locale: 'auto',
          token: function (stripeToken: any) {
            console.log(stripeToken)
            alert('Payment has been successfull!');
          }
        });
      }

      window.document.body.appendChild(script);
    }
  }

  acceptToDeal(){

  }
  refuseDeal(){

  }

}

