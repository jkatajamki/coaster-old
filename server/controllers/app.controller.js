import { Get, Controller } from '@nestjs/common';

@Controller()
class AppController {
  message = 'We Live...';

  @Get()
  root() {
    return this.message;
  }
}

export default AppController;
