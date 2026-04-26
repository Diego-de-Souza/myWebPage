import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { MenuFloatComponent } from '../../components/menu-float/menu-float.component';

@Component({
  selector: 'app-contato',
  standalone: true,
  imports: [
    ContactFormComponent,
    MenuFloatComponent,
    FooterComponent,
    TranslateModule],
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss','./contato-responsive.component.scss']
})
export class ContatoComponent {
  
}
