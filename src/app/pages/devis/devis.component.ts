import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';
import { SnackBarService } from '../../shared/services/snackBar.service';

interface FormData {
  // Step 1
  serviceType: string;
  residenceType: string;
  estimatedDate: string;
  // Step 2 - Project Types (checkboxes)
  securityElectronic: boolean;
  smartHome: boolean;
  solarInstallation: boolean;
  premiumFinishes: boolean;
  completeProject: boolean;

  // Step 2 - Installation Details
  propertyType: string;
  address: string;
  surface: string;
  floors: string;
  currentState: string;
  projectNeeds: string;
  budget: string;
  interventionDate: string;

  // Step 3
  name: string;
  phone: string;
  email: string;
  acceptTerms: boolean;
}

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.scss'
})
  export class DevisComponent implements OnInit,OnDestroy {

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
 


  currentStep = 1;
  totalSteps = 3;

  formData: FormData = {
    serviceType: '',
    residenceType: '',
    estimatedDate: '',
    securityElectronic: false,
    smartHome: false,
    solarInstallation: false,
    premiumFinishes: false,
    completeProject: false,
    propertyType: '',
    address: '',
    surface: '',
    floors: '',
    currentState: '',
    projectNeeds: '',
    budget: '',
    interventionDate: '',
    name: '',
    phone: '',
    email: '',
    acceptTerms: false
  };

  serviceTypes = [
    { value: 'installation', labelKey: 'devis.services.installation' },
    { value: 'maintenance', labelKey: 'devis.services.maintenance' },
    { value: 'consultation', labelKey: 'devis.services.consultation' },
    { value: 'upgrade', labelKey: 'devis.services.upgrade' }
  ];

  residenceTypes = [
    { value: 'maison', labelKey: 'devis.residence.house' },
    { value: 'appartement', labelKey: 'devis.residence.apartment' },
    { value: 'bureau', labelKey: 'devis.residence.office' },
    { value: 'commerce', labelKey: 'devis.residence.commercial' }
  ];

  propertyTypes = [
    { value: 'villa', labelKey: 'devis.propertyTypes.villa' },
    { value: 'appartement', labelKey: 'devis.propertyTypes.apartment' },
    { value: 'bureau', labelKey: 'devis.propertyTypes.office' }
  ];

  floorOptions = [
    { value: 'rdc', labelKey: 'devis.floors.rdc' },
    { value: 'r+1', labelKey: 'devis.floors.r1' },
    { value: 'r+2', labelKey: 'devis.floors.r2' },
    { value: 'sous-sol', labelKey: 'devis.floors.basement' }
  ];

  currentStateOptions = [
    { value: 'construction', labelKey: 'devis.currentState.construction' },
    { value: 'habite', labelKey: 'devis.currentState.occupied' },
    { value: 'renovation', labelKey: 'devis.currentState.renovation' }
  ];

  budgetOptions = [
    { value: 'less-1m', labelKey: 'devis.budget.less1m' },
    { value: '1m-3m', labelKey: 'devis.budget.range1m3m' },
    { value: '3m-7m', labelKey: 'devis.budget.range3m7m' },
    { value: 'more-7m', labelKey: 'devis.budget.more7m' },
    { value: 'custom', labelKey: 'devis.budget.custom' }
  ];

  get progressPercentage(): number {
    return (this.currentStep / this.totalSteps) * 100;
  }

  nextStep(): void {
    if (this.currentStep < this.totalSteps && this.isCurrentStepValid()) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  isCurrentStepValid(): boolean {
    switch (this.currentStep) {
      case 1:
        return !!(this.formData.serviceType && this.formData.residenceType && this.formData.estimatedDate);
      case 2:
        // At least one project type should be selected and basic info filled
        const hasProjectType = this.formData.securityElectronic || this.formData.smartHome || 
                              this.formData.solarInstallation || this.formData.premiumFinishes || 
                              this.formData.completeProject;
        return !!(hasProjectType && this.formData.propertyType && this.formData.address && 
                  this.formData.surface && this.formData.floors && this.formData.currentState);
      case 3:
        return !!(this.formData.name && this.formData.phone && this.formData.email && this.formData.acceptTerms);
      default:
        return false;
    }
  }
  submitForm(): void {
    if (this.isCurrentStepValid()) {
      console.log('Form submitted:', this.formData);
      // Ici vous pouvez ajouter votre logique d'envoi
      alert('Votre demande de devis a été envoyée avec succès !');
    }
     this.snackbar
      .showConfirmation(`Voulez-vous vraiment envoyer cette demande de devis ?`)
      .then((result) => {
        if (result["value"] == true) {
          this.loadData = true;
          this.baseService.add("contact",this.formData)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
            (resp) => {
              if (resp) {
                this.snackbar.showSimpleNotification(
                  "Ok",
                  "Demande de devis  ajouté avec succés",
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
