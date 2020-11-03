@echo off

echo components variable init..
set enter=%1%
set string=%enter%
set csslang=less
set cds=../
set layout=
echo components new folders..
mkdir src\%enter%
cd src\%enter%
:split
for /f "tokens=1,* delims=\" %%i in ("%string%") do (
  set input=%%i
  set string=%%j
  set  layout=%layout%%cds%
)
if not "%string%"=="" goto split

echo components write some default structure..
type nul>index.html
echo ^<div^> >> index.html
echo   %input% >> index.html
echo ^<^/div^> >> index.html

type nul>index.%csslang%

type nul>index.vue
echo ^<style  lang=^"less^"^> >> index.vue
echo   ^@import ^".^/index.less^"; >> index.vue
echo ^<^/style^> >> index.vue
echo ^<script^> >> index.vue
echo   export default { >> index.vue
echo     name: ^'%input%^', >> index.vue
echo     template: require(^'.^/index.html^'), >> index.vue
echo     data() { >> index.vue
echo       return { >> index.vue
echo       } >> index.vue
echo     } >> index.vue
echo   } >> index.vue
echo ^<^/script^> >> index.vue

echo components write success

cd D:\webspace\ysbao
