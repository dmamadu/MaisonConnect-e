import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';
import { SnackBarService } from '../../shared/services/snackBar.service';

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
  
    ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }
  
      ngOnInit(): void {
      }


  
  form = { name: '', email: '', message: '' };


    submitForm(): void {
      if (1) {
        console.log('Form submitted:', this.form);
        // Ici vous pouvez ajouter votre logique d'envoi
        alert('Votre demande de devis a été envoyée avec succès !');
      }
       this.snackbar
        .showConfirmation(`Voulez-vous vraiment envoyer ce message ?`)
        .then((result) => {
          if (result["value"] == true) {
            this.loadData = true;
            this.baseService.add("contact",this.form)
             .pipe(takeUntil(this.destroy$))
            .subscribe(
              (resp) => {
                if (resp) {
                  this.snackbar.showSimpleNotification(
                    "Ok",
                    "Message envoyé avec succès",
                  );
                  this.loadData = false;
                } else {
                  this.loadData = false;
                }
              },
              (error) => {
                console.log(error);
              }
            );
          }
        });
     }
}
