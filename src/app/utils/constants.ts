import { DocType } from '../types/types';

export const URL_API = 'http://192.168.0.44:8080/api/veterinary_clinic/';

export const DOCUMENT_TYPES: { value: DocType; label: string }[] = [
  {
    value: 'CC',
    label: 'Cédula de ciudadanía',
  },
  {
    value: 'CE',
    label: 'Cédula de extrangería',
  },
  {
    value: 'NIT',
    label: 'NIT',
  },
  {
    value: 'PAS',
    label: 'Pasaporte',
  },
  {
    value: 'TI',
    label: 'Tarjeta de identidad',
  },
];

export const GENDER_TYPES = [
  {
    value: 'F',
    label: 'Mujer',
  },
  {
    value: 'M',
    label: 'Hombre',
  },
];

export const GENDER_PET_TYPES = [
  {
    value: 'F',
    label: 'Hembra',
  },
  {
    value: 'M',
    label: 'Macho',
  },
];
