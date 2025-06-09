import { Controller, Get } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './types/usuario.type';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly UsuariosService: UsuariosService) {}


    @Get()
    allCats(): Usuario[] {
        return this.UsuariosService.todosUsuarios();
    }
}


