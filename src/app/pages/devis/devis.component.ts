import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, takeUntil } from 'rxjs';
import { RootService } from '../../shared/services/root.service';
import { SnackBarService } from '../../shared/services/snackBar.service';

interface FormData {
  // Step 1 - Types de projets (checkboxes)
  securityElectronic: boolean;
  smartHome: boolean;
  solarInstallation: boolean;
  premiumFinishes: boolean;
  completeProject: boolean;

  // Step 2 - Informations sur le site d'installation
  propertyType: string;
  address: string;
  surface: string;
  floors: string;
  currentState: string;
  projectNeeds: string;
  
  // Step 2 - Budget et date
  budget: string;
  interventionDate: string;

  // Step 3 - Coordonnées
  name: string;
  phone: string;
  email: string;
}

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.scss'
})
export class DevisComponent implements OnInit, OnDestroy {
  loadData: boolean = false;
  private destroy$ = new Subject<void>();
  private baseService = inject(RootService);
  private snackbar = inject(SnackBarService);

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {}

  currentStep = 1;
  totalSteps = 3;

  formData: FormData = {
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
    email: ''
  };

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
        // Au moins un type de projet doit être sélectionné
        return !!(
          this.formData.securityElectronic ||
          this.formData.smartHome ||
          this.formData.solarInstallation ||
          this.formData.premiumFinishes ||
          this.formData.completeProject
        );
      case 2:
        // Informations de base du site remplies
        return !!(
          this.formData.propertyType &&
          this.formData.address &&
          this.formData.surface &&
          this.formData.floors &&
          this.formData.currentState
        );
      case 3:
        // Coordonnées complètes
        return !!(this.formData.name && this.formData.phone && this.formData.email);
      default:
        return false;
    }
  }

  submitForm(): void {
    if (!this.isCurrentStepValid()) {
      return;
    }

    this.snackbar
      .showConfirmation(`Voulez-vous vraiment envoyer cette demande de devis ?`)
      .then((result) => {
        if (result['value'] == true) {
          this.loadData = true;
          this.baseService
            .add('devis', this.formData)
            .pipe(takeUntil(this.destroy$))
            .subscribe(
              (resp) => {
                if (resp) {
                  this.snackbar.showSimpleNotification(
                    'Ok',
                    'Demande de devis ajoutée avec succès'
                  );
                  this.loadData = false;
                  // Réinitialiser le formulaire
                  this.resetForm();
                } else {
                  this.loadData = false;
                }
              },
              (error) => {
                console.log(error);
                this.loadData = false;
              }
            );
        }
      });
  }

  resetForm(): void {
    this.currentStep = 1;
    this.formData = {
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
      email: ''
    };
  }
}