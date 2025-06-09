import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './types/usuario.type';

@Controller('usuarios')
export class UsuariosController {
    constructor(private readonly UsuariosService: UsuariosService) {}


    @Get()
    allCats(): Usuario[] {
        return this.UsuariosService.todosUsuarios();
    }


    @Get(':id')
    obtenerId(@Param('id', new ParseIntPipe()) id: number): Usuario | undefined {
        return this.UsuariosService.obtenerId(id)
    }
}


