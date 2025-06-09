import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Usuario } from './types/usuario.type';
import { CrearUsuarioDto } from './dtos/create-usuario.dto';

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
    
    @Post() 
    creacion(@Body() crearUsuarioDto: CrearUsuarioDto): Usuario {
        return this.UsuariosService.creacion(crearUsuarioDto)

    }
}


