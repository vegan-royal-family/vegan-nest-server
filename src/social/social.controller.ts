import { Controller, Get, Query } from '@nestjs/common';

import { OauthProvider } from './enum';
import { ISocialLoginResponse } from './interface';
import { SocialFactoryService } from './service/social-factory.service';

@Controller('/')
export class SocialController {
  constructor(private readonly socialFactoryService: SocialFactoryService) {}

  @Get('kakao/callback')
  async kakaoLogin(
    @Query('code') code: string,
    @Query('state') state: string,
  ): Promise<ISocialLoginResponse> {
    const socialAccessToken = await this.socialFactoryService.getAccessTokenByCode({
      oauthProvider: OauthProvider.KAKAO,
      code,
      state,
    });

    return this.socialFactoryService.socialLogin({
      oauthProvider: OauthProvider.KAKAO,
      socialAccessToken,
    });
  }

  @Get('google/callback')
  googleLogin(): string {
    return 'ok';
  }

  @Get('apple/callback')
  appleLogin(): string {
    return 'ok';
  }
}