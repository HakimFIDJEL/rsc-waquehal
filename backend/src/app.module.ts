import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { JwtService } from '@nestjs/jwt';
import { join } from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { EmailService } from './email/email.service';
import { EmailModule } from './email/email.module';
import { AuthService } from './auth/auth.service';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';
import { SponsorModule } from './sponsor/sponsor.module';
import { PalmaresModule } from './palmares/palmares.module';
import { GalerieModule } from './galerie/galerie.module';
import { MatchPlayerModule } from './match-player/match-player.module';
import { MatchCategoryModule } from './match-category/match-category.module';
import { MatchTeamModule } from './match-team/match-team.module';
import { MatchModule } from './match/match.module';
import { NewsImageModule } from './news-image/news-image.module';
import { NewsModule } from './news/news.module';
import { ActivityImageModule } from './activity-image/activity-image.module';
import { ActivityCategoryModule } from './activity-category/activity-category.module';
import { ActivityModule } from './activity/activity.module';
import { PalmaresService } from './palmares/palmares.service';
import { ActivityService } from './activity/activity.service';
import { ActivityCategoryService } from './activity-category/activity-category.service';
import { ActivityImageService } from './activity-image/activity-image.service';
import { ContactService } from './contact/contact.service';
import { GalerieService } from './galerie/galerie.service';
import { MatchService } from './match/match.service';
import { MatchCategoryService } from './match-category/match-category.service';
import { MatchPlayerService } from './match-player/match-player.service';
import { MatchTeamService } from './match-team/match-team.service';
import { NewsService } from './news/news.service';
import { NewsImageService } from './news-image/news-image.service';
import { SponsorService } from './sponsor/sponsor.service';

// console.log('MAIL_HOST:', process.env.MAIL_HOST);
// console.log('MAIL_PORT:', process.env.MAIL_PORT);
// console.log('MAIL_USER:', process.env.MAIL_USER);
// console.log('MAIL_PASS:', process.env.MAIL_PASS);

@Module({
  imports: [
    ConfigModule.forRoot(), 
    UserModule, 
    AuthModule, 
    MailerModule.forRoot({
      transport: {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
      defaults: {
        from: '"No Reply" <noreply@rsc-wasquehal.com>',
      },
      template: {
        dir: '/app/email-templates',
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
      serveRoot: '/uploads',
    }), 
    EmailModule, ActivityModule, ActivityCategoryModule, ActivityImageModule, NewsModule, NewsImageModule, MatchModule, MatchTeamModule, MatchCategoryModule, MatchPlayerModule, GalerieModule, PalmaresModule, SponsorModule, ContactModule,
  ],
  controllers: [AppController],
  providers: [AppService, 
              PrismaService, 
              EmailService,
              AuthService, 
              UserService, 
              JwtService, 
              PalmaresService, 
              ActivityService, 
              ActivityCategoryService, 
              ActivityImageService,
              ContactService,
              GalerieService,
              MatchService,
              MatchCategoryService,
              MatchPlayerService,
              MatchTeamService,
              NewsService,
              NewsImageService,
              SponsorService
            ],
})
export class AppModule {}
