import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RestaurantesController } from "./restaurantes/restaurantes.controller";
import { UsuariosController } from "./usuarios/usuarios.controller";
import { ReservasController } from "./reservas/reservas.controller";
import { RestaurantesService } from "./restaurantes/restaurantes.service";
import { AuthController } from "./auth/auth.controller";
import { FotosController } from "./fotos/fotos.controller";
import { PlatosController } from "./platos/platos.controller";
import { MenusController } from "./menus/menus.controller";
import { UsuariosService } from "./usuarios/usuarios.service";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: "mysql",
            host: "localhost",
            port: 3306,
            username: "root",
            password: "",
            database: "pf_web_mov",
            entities: [],
            synchronize: true, //esto es solo para desarrollo
        }),
    ],
    controllers: [AppController, RestaurantesController, UsuariosController, ReservasController, PlatosController, MenusController, FotosController, AuthController],
    providers: [AppService, RestaurantesService, UsuariosService],
})
export class AppModule {}
