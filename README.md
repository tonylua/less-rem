# less-rem
LESS mixin and javascript function to use rem units


## 1. javascript function

```
import rem from 'rem';
...
let remFac = 100;
rem(remFac);
```

## 2. use LESS

```
@remFac: 100;
@remUIWidth: 640;
@import "../../node_modules/less-rem/dist/rem";

...

//then, you can use these 4 mixins with the actually px unit of your UI-PSD:
.px2rem(28px, padding-left);
.px2rem_2(28px,30px,padding);
.px2rem_3(24px, 0, 10px, padding);
.px2rem_4(@h,0,0,@h,border-radius);
```

