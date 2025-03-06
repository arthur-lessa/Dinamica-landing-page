import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ServiceCardComponent } from '../service-card/service-card.component';

@Component({
  selector: 'app-services',
  imports: [CommonModule, MatIconModule, ServiceCardComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {

  assessoriaText: string = 'Nossa equipe oferece assessoria jurídica completa para empresas e pessoas físicas, atuando em diversas áreas do Direito. Seja para consultas, pareceres, negociações ou representação em processos judiciais, estamos prontos para oferecer soluções personalizadas e eficientes.';
  contratosText: string = 'A base de qualquer relação comercial ou empresarial está em contratos bem elaborados. Nosso escritório atua na redação, revisão e análise de contratos, garantindo que todos os termos sejam claros, equilibrados e alinhados aos interesses das partes envolvidas.';
}
