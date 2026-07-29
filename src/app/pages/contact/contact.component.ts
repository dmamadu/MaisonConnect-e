import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';
import { SnackBarService } from '../../shared/services/snackBar.service';
import { SettingService } from '../../shared/services/setting.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,FormsModule,TranslateModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {

  // Pour indiquer le chargement (spinner)
    loadData: boolean = false;
  // Pour gérer les subscriptions et éviter les memory leaks
    private destroy$ = new Subject<void>();
    private  baseService= inject(RootService)
    private snackbar= inject(SnackBarService)
    private settingService = inject(SettingService)

    whatsappLink$ = this.settingService.getWhatsappLink();

    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }
  
      ngOnInit(): void {
      }


  
  form = { name: '', email: '', message: '' };

  get isFormValid(): boolean {
    return !!(this.form.name.trim() && this.form.email.trim() && this.form.message.trim());
  }

  submitForm(): void {
    if (!this.isFormValid) return;

    this.snackbar
      .showConfirmation(`Voulez-vous vraiment envoyer ce message ?`)
      .then((result) => {
        if (result['value'] === true) {
          this.loadData = true;
          this.baseService
            .add('contact', this.form)
            .pipe(takeUntil(this.destroy$))
            .subscribe({
              next: (resp) => {
                this.loadData = false;
                if (resp) {
                  this.snackbar.showSimpleNotification('Ok', 'Message envoyé avec succès');
                  this.form = { name: '', email: '', message: '' };
                }
              },
              error: (err) => {
                console.error(err);
                this.loadData = false;
                this.snackbar.showSimpleNotification('Erreur', 'Une erreur est survenue. Veuillez réessayer.');
              },
            });
        }
      });
  }
}
