import { Injectable } from '@nestjs/common';
import { Usuario } from './types/usuario.type';
import { CrearUsuarioDto } from './dtos/create-usuario.dto';

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

    creacion(usuario: CrearUsuarioDto): Usuario {
        const nuevoUsuario: Usuario  ={
            id: (this.usuarios.findLast((item) => item.id > 0)?.id || 1) + 1,
            ...usuario,
        };

        this.usuarios.push(nuevoUsuario);
        return nuevoUsuario
    }
}
