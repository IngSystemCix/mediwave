import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../../../../shared/components/navbar/navbar.component";
import { format } from "@formkit/tempo"

@Component({
  selector: 'app-home-patient',
  imports: [NavbarComponent],
  templateUrl: './home-patient.component.html',
  styleUrl: './home-patient.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePatientComponent {
  getDateNow(): string {
    const date = new Date();
    return format(date, { date: "full" });
  }
}
