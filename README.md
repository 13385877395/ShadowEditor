# Shadow Editor

English / [中文](README_zh.md)

* Name: Shadow Editor
* Version: v0.5.3(Coming Soon)
* Description: Cross-platform 3D scene editor based on three.js, golang and mongodb.
* Source: [GitHub](https://github.com/tengge1/ShadowEditor) [Gitee](https://gitee.com/tengge1/ShadowEditor) | Document: [Gitee](https://gitee.com/tengge1/ShadowEditor/wikis/pages) | Demo: [GitHub](https://tengge1.github.io/ShadowEditor-examples/) [Gitee](http://tengge1.gitee.io/shadoweditor-examples/) | Video: [Weibo](https://weibo.com/tv/v/IjIn9AyvX?fid=1034:4446986821107725) [Bilibili](https://www.bilibili.com/video/av78428475?from=search&seid=9203731141485399611) | Assets: [BaiduNetdisk](https://pan.baidu.com/s/1IxJVM6fFLoIAJG-GKHjVTA)
* Technology Stack: html, css, javascript, rollup, react.js, webgl, three.js, golang, mongodb.
* If helpful to you, please [DOnate](https://gitee.com/tengge1/ShadowEditor) to support us. thank you!

![image](images/scene20200503_en.jpg)

## v0.5.3 is Coming Soon

1. Fix bugs of uploading models and publishing scenes on windows.
2. Add links to open source projects.

## v0.5.2 has Released

* Release Date: May 31, 2020
* Update Logs:

1. MongoDB user and password configuration.
2. Documentation has moved to gitee wiki. [See Detail](https://gitee.com/tengge1/ShadowEditor/wikis/pages)
3. Use JSON web tokens (JWT) for user authentication. 
4. Automatic saving is disabled by default.
5. Fix the bug that the uploaded data of non-admin users is not displayed.
6. Fix the bug that the resource list does not load when the user does not have permission to view all resources.
7. Fix the bug that the thumbnail cannot be set in the texture.
8. Fix the error of adding gltf format model to the scene.
9. Non-administrators cannot edit or delete other people's public scenes.
10. Fix the bug that it will be `saved as` when save twice.
11. The resource and permission management tests are complete, and there are almost no bugs in the golang server.

## Features

1. Cross-platform: `Windows`, `Linux`, `Mac`; and supports desktop and web versions.
2. It supports many 3D formats: `3ds`, `3mf`, `amf`, `assimp`(anim), `awd`, `babylon`, `binary`, `bvh`(anim), `collada`, `ctm`, `draco` , `fbx`(anim), `gcode`, `gltf`(`gltf` and `glb`, anim), `js`(anim), `kmz`, `lmesh`(anim), `md2`, `mmd`(`pmd` and `pmx`, anim), `nrrd`, `obj`, `pcd`, `pdb`, `ply`, `prwm`, `sea3d`(anim), `stl`, `vrm`, `vrml`, `vtk`, `X`. (anim) means it supports animation.
3. Built-in objects: group; plane, cube, circle, cylinder, sphere, icosahedron, torus, torus knot, teapot, lathe; unscaled text, 3D text; line segments, CatmullRom curve, quadratic Bezier curve, cubic Bezier curve, ellipse curve; point marks; arrow helper, axes helper; sprite.
4. Built-in lights: ambient light, directional light, point light, spotlight, hemispherical light, rect area light.
5. Built-in components: background music, particle emitter, sky, fire, water, smoke, cloth, berlin terrain, sky sphere.
6. Support materials: LineBasicMaterial, LineDashedMaterial, MeshBasicMaterial, MeshDepthMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshPhongMaterial, PointsMaterial, MeshStandardMaterial, MeshPhysicalMaterial, SpriteMaterial, ShaderMaterial, RawShaderMaterial.
7. Edit javascript, shader program and json with intelligence.
8. Live player can play animations in the scene.
9. Exporting `gltf`, `obj`, `ply`, `stl`, `Collada`, `DRACO` models.
10. Publish scene as static resources, and can be embedded in `iframe`.
11. Support languages: `English`, `中文`, `繁體中文`, `日本語`, `한국어`, `русский`, `Le français`.
12. Scene version management: supporting history and logs, undo and redo, auto saving.
13. Authority management: organization, user, role, authority, registration, login, and password modification.
14. Resource management: scene, mesh, texture, material, audio, animation, screenshot, video, typeface.

## Requirements

1. MongoDB v3.6.8+
2. Chrome 81.0+ or ​​Firefox 75.0+

The following is only required when you want to build from source.

1. Golang 1.14.2+
2. NodeJS 14.1+
3. gcc 9.3.0+ (`tdm-gcc`, `MinGW-w64` or `MinGW` on Windows, and make sure `gcc` can be accessed through the command line)
4. git 2.25.1+
5. make 4.2.1+ (Linux only)

**Note:** The version number is for reference only.

## Download and Compile

You can use git to download the source code.

```bash
git clone https://github.com/tengge1/ShadowEditor.git
```

In **China**, `github` is really slow, you can use `gitee` instead.

```bash
git clone https://gitee.com/tengge1/ShadowEditor.git
```

### Build on Ubuntu

1. If you are in `China`, run `make proxy` to set golang and nodejs proxy.
2. Run `make` to build the server and web.
3. Edit `build/config.toml`, and modify the database host and port.
4. Run `make run` to launch the server. You can now visit: `http://localhost:2020`.

### Build on Windows

1. If you are in `China`, double click `set_proxy.bat` in the `scripts` folder.
2. Double click `build.bat` in the `scripts` folder.
3. Edit `config.toml` in the `build` folder, and modify the database host and port.
4. Double click `ShadowEditor.exe` in the `build` folder. You can now visit: `http://localhost:2020`.

### Install as Ubuntu Service

1. Edit `./scripts/service_linux/shadoweditor.service`, set the right path.
2. Run `make service` to install service.
3. Run `sudo systemctl start shadoweditor` to start service.
4. Run `sudo systemctl enable shadoweditor` to auto start service.

### Install as Windows Service

1. Run `install.bat` in the `scripts/service_win` folder as administrator.
2. Edit `service.reg` in the `scripts/service_win` folder, set `AppDirectory` to the absolute path of the `build` folder.
3. Double click `service.reg` in the `scripts/service_win` folder.
4. Open `Windows Services Manager`, start `ShadowEditor` service.

## Frequently Asked Questions

1. Failed when upload models.

You need to compress the model assets into a `zip` file, and the entry file cannot be nested in a folder. The server will decompress and put it in the `./build/public/Upload/Model` folder, and add a record in the MongoDB `_Mesh` collection.

2. How to combine multiple models together?

Basic geometry supports multiple levels of nesting. You can add a `group` (in the geometry menu), and then drag multiple models onto the `group` in the `Hierachy` Panel.

3. How to enable authority?

Edit `config.toml` and set `authority.enabled` to `true`. The default administrator username is `admin` and the password is `123456`.

4. The brower report `asm.js has been disabled because the script debugger is connected. Please disconnect the debugger to enable asm.js.` Error.

**Complete error**: asm.js has been disabled because the script debugger is connected. Please disconnect the debugger to enable asm.js. ammo.js (1,1) SCRIPT1028: SCRIPT1028: Expected identifier, string or number ShadowEditor.js (3948,8) SCRIPT5009: 'Shadow' is not defined.

**Solution**: Tencent browser does not support `ammo.js` (WebAssembly) compiled with `Emscripten`, it is recommended to use `Chrome` or `Firebox` instead.

5. How can I upgrade from C# to golang version?

The data structure and web client is not changed, just copy `./ShadowEditor.Web/Upload/` folder to
`build/public/Upload/`.

## License

MIT License

## Open Source Projects

**Thanks to the following open source projects.**

https://github.com/golang/go  
http://github.com/BurntSushi/toml  
http://github.com/dgrijalva/jwt-go  
http://github.com/dimfeld/httptreemux  
http://github.com/inconshreveable/mousetrap  
http://github.com/json-iterator/go  
http://github.com/mozillazg/go-pinyin  
http://github.com/otiai10/copy  
http://github.com/sirupsen/logrus  
http://github.com/spf13/cobra  
http://github.com/spf13/viper  
http://github.com/urfave/negroni  
http://go.mongodb.org/mongo-driver  
  
https://github.com/facebook/react  
https://github.com/mrdoob/three.js  
https://github.com/rollup/rollup  
https://github.com/babel/babel  
https://github.com/eslint/eslint  
https://github.com/rollup/rollup-plugin-babel  
https://github.com/rollup/rollup-plugin-commonjs  
https://github.com/rollup/rollup-plugin-json  
https://github.com/rollup/rollup-plugin-node-resolve  
https://github.com/egoist/rollup-plugin-postcss  
https://github.com/rollup/rollup-plugin-replace  
  
https://github.com/tweenjs/tween.js  
https://github.com/JedWatson/classnames  
https://github.com/d3/d3-dispatch  
https://github.com/i18next/i18next  
https://github.com/js-cookie/js-cookie  
https://github.com/facebook/prop-types  
https://github.com/codemirror/CodeMirror  
https://github.com/jquery/esprima  
https://github.com/tschw/glslprep.js  
https://github.com/zaach/jsonlint  
https://github.com/acornjs/acorn  
https://github.com/kripken/ammo.js  
https://github.com/dataarts/dat.gui  
https://github.com/toji/gl-matrix  
https://github.com/squarefeet/ShaderParticleEngine  
https://github.com/mrdoob/stats.js  
https://github.com/mrdoob/texgen.js  
https://github.com/yomotsu/VolumetricFire  