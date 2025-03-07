import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { AvatarComponent } from "../avatar/avatar.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [AvatarComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  @Input() username!: string;
  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  openModalNewAppointment(): void {
    // Lógica para abrir el modal
  }

  @HostListener('document:click', ['$event'])
  closeSidebarOnClickOutside(event: Event): void {
    const sidebarElement = document.querySelector('.sidebar');
    const buttonElement = document.querySelector('.toggle-button');

    if (
      this.isSidebarOpen &&
      sidebarElement &&
      !sidebarElement.contains(event.target as Node) &&
      buttonElement &&
      !buttonElement.contains(event.target as Node)
    ) {
      this.isSidebarOpen = false;
    }
  }
}
