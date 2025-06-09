import { Injectable } from '@nestjs/common';
import { Usuario } from './types/usuario.type';

@Injectable()
export class UsuariosService {
    usuarios: Usuario[]

    constructor(){
        this.usuarios = [
            {
                id: 1,
                nombre: "Imanol",
                apellido: "Flores",
                localidad: "Totoltepec",
                edad: 21
            }
        ];
    }

    todosUsuarios(): Usuario[]{
        return this.usuarios;
    }

    obtenerId(id: number): Usuario | undefined{
        return this.usuarios.find((cat => cat.id === id))
    }

}
