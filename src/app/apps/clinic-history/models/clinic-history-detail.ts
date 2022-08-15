import { Worker } from '../../worker/models/worker';
import { ClinicHistory } from './clinic-history';

export class ClinicHistoryDetail {
  id: number | null | undefined;
  weight: number | null | undefined;
  temperature: number | null | undefined;
  heartRate: number | null | undefined;
  breathingRate: number | null | undefined;
  dateTime: string | null | undefined;
  feeding: string | null | undefined;
  habitat: string | null | undefined;
  observations: string | null | undefined;
  workerId: number | null | undefined;
  clinicHistoryId: number | null | undefined;
  worker: Worker | null | undefined;
  clinicHistory: ClinicHistory | null | undefined;

  constructor({
    id,
    weight,
    temperature,
    heartRate,
    breathingRate,
    dateTime,
    feeding,
    habitat,
    observations,
    workerId,
    clinicHistoryId,
    worker,
    clinicHistory,
  }: ClinicHistoryDetail | any = {}) {
    this.id = id;
    this.weight = weight;
    this.temperature = temperature;
    this.heartRate = heartRate;
    this.breathingRate = breathingRate;
    this.dateTime = dateTime;
    this.feeding = feeding;
    this.habitat = habitat;
    this.observations = observations;
    this.workerId = workerId;
    this.worker = worker;
    this.clinicHistoryId = clinicHistoryId;
    this.clinicHistory = clinicHistory;
  }
}
