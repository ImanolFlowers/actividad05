import { Injectable } from '@nestjs/common';
import { Usuario } from './types/usuario.type';
import { CrearUsuarioDto } from './dtos/create-usuario.dto';
import { ActualizarUsuatioDto } from './dtos/update-usuarios.dto';

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

    actualizar(id: number, cat: ActualizarUsuatioDto){
    
        const encontrarCats = this.usuarios.findIndex(usuarios => usuarios.id === id);
           if (encontrarCats === -1) {
            return 'No se encontro el registro'
           }  
        this.usuarios[encontrarCats] = {
            ...this.usuarios[encontrarCats],
            ...cat,
        };
        return 'Registro actualizado'
        
    }
}
