import { NgForm } from '@angular/forms';

export class Freight {
  public empresa: string;
  public contacto: string;
  public correo: string;
  public tel: string;
  public pais: string;
  public servicio: string;
  public id_pais_origen: number;
  public id_region_origen: number;
  public ciudad_orig: string;
  public fecha_salida: string;
  public id_pais_dest: number;
  public id_region_destino: number;
  public ciudad_dest: string;
  public fecha_llegada: string;
  public recep: string;
  public entrega: string;
  public serv_seguro: string;
  public serv_bonded: string;
  public serv_aduana: string;
  public serv_truck: string;
  public serv_temp: string;
  public serv_insp: string;
  public size_cont: number;
  public cant_cont: string;
  public peso_cont: string;
  public comentario: string;
  public service_cont: string;
  public goods: string;
  public cubic: string;

  public createJson(form: NgForm, myFlag: number, type: string): Freight {
    const flete = new Freight();
    flete.empresa = this.checkForNullOrUndefined(form.value.empresa);
    flete.contacto = this.checkForNullOrUndefined(form.value.contacto);
    flete.correo = this.checkForNullOrUndefined(form.value.correo);
    flete.tel = this.checkForNullOrUndefined(form.value.tel);
    flete.pais = this.checkForNullOrUndefined(form.value.pais);
    flete.servicio = this.checkForNullOrUndefined(type);
    flete.id_pais_origen = Number(this.checkForNullOrUndefined(form.value.id_pais_origen));
    flete.id_region_origen = Number(this.checkForNullOrUndefined(form.value.id_region_origen));
    flete.ciudad_orig = this.checkForNullOrUndefined(form.value.ciudad_orig);
    flete.fecha_salida = this.checkForNullOrUndefined(form.value.fecha_salida).split('T')[0];
    flete.id_pais_dest = Number(this.checkForNullOrUndefined(form.value.id_pais_dest));
    flete.id_region_destino = Number(this.checkForNullOrUndefined(form.value.id_region_destino));
    flete.ciudad_dest = this.checkForNullOrUndefined(form.value.ciudad_dest);
    flete.fecha_llegada = this.checkForNullOrUndefined(form.value.fecha_llegada).split('T')[0];
    flete.recep = this.checkForNullOrUndefined(form.value.recepcion);
    flete.entrega = this.checkForNullOrUndefined(form.value.entrega);
    flete.serv_seguro = '';
    flete.serv_bonded = '';
    flete.serv_aduana = '';
    flete.serv_truck = '';
    flete.serv_temp = '';
    flete.serv_insp = '';
    if (this.checkForNullOrUndefined(form.value.serv_seguro) === 'true') {
      flete.serv_seguro = 'Inssurance';
    }
    if (this.checkForNullOrUndefined(form.value.serv_bonded) === 'true') {
      flete.serv_bonded = 'Bonded Warehouse';
    }
    if (this.checkForNullOrUndefined(form.value.serv_aduana) === 'true') {
      flete.serv_aduana = 'Customs Cleareance';
    }
    if (this.checkForNullOrUndefined(form.value.serv_truck) === 'true') {
      flete.serv_truck = 'Land Transportation';
    }
    if (this.checkForNullOrUndefined(form.value.serv_temp) === 'true') {
      flete.serv_temp = 'Controled Temp';
    }
    if (this.checkForNullOrUndefined(form.value.serv_insp) === 'true') {
      flete.serv_insp = 'Cargo Inspection';
    }

    // tslint:disable-next-line: max-line-length
    flete.size_cont = ((this.checkForNullOrUndefined((form.value.size_cont)).split(' ')[0]) === '' ? 0 : Number(this.checkForNullOrUndefined((form.value.size_cont)).split(' ')[0]));
    flete.cant_cont = this.checkForNullOrUndefined(form.value.cant_cont);
    flete.peso_cont = this.checkForNullOrUndefined(form.value.peso_cont);
    flete.comentario = this.checkForNullOrUndefined(form.value.comentario);
    flete.service_cont = this.checkForNullOrUndefined(form.value.service_cont);
    flete.goods = this.checkForNullOrUndefined(form.value.goods);
    flete.cubic = this.checkForNullOrUndefined(form.value.cubic);
    return flete;
  }

  private checkForNullOrUndefined(type: any): string {
     if (type == null) { return ''; } else { return type.toString(); }
  }
}
