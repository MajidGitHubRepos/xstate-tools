# stately-vscode

## 1.10.0

### Minor Changes

- [#201](https://github.com/statelyai/xstate-tools/pull/201) [`d439ace`](https://github.com/statelyai/xstate-tools/commit/d439ace70d04fabf9006b18dc4b9e5358d7f5a61) Thanks [@Andarist](https://github.com/Andarist)! - The requirement to authenticate with the extension has been removed.

### Patch Changes

- [#203](https://github.com/statelyai/xstate-tools/pull/203) [`a49095f`](https://github.com/statelyai/xstate-tools/commit/a49095ff41656a9de2249083614ab1b8777b8a35) Thanks [@Andarist](https://github.com/Andarist)! - Fixed an issue with parametrized guards not being recognized by typegen. Note that this doesn't provide type-safe custom parameters for your guard implementations. It only allows `event` parameter to be inferred.

- Updated dependencies []:
  - @xstate/tools-shared@1.2.3

## 1.9.3

### Patch Changes

- [#198](https://github.com/statelyai/xstate-tools/pull/198) [`82b6c7c`](https://github.com/statelyai/xstate-tools/commit/82b6c7c603eef515853b81ff29d0738548b6c051) Thanks [@mellson](https://github.com/mellson)! - Updated `xsm` snippet for TypeScript machines to make it easier to type context and events.

## 1.9.2

### Patch Changes

- [#195](https://github.com/statelyai/xstate-tools/pull/195) [`446b5aa`](https://github.com/statelyai/xstate-tools/commit/446b5aa1753043032c08385afbc14b6ed3d60e5d) Thanks [@Andarist](https://github.com/Andarist)! - Preserve `predictableActionArguments` config key when updating the machines.

- Updated dependencies [[`446b5aa`](https://github.com/statelyai/xstate-tools/commit/446b5aa1753043032c08385afbc14b6ed3d60e5d)]:
  - @xstate/tools-shared@1.2.2

## 1.9.1

### Patch Changes

- [#190](https://github.com/statelyai/xstate-tools/pull/190) [`a5f091f`](https://github.com/statelyai/xstate-tools/commit/a5f091f0606a183d62dce7dcf45c57474bffab04) Thanks [@Andarist](https://github.com/Andarist)! - Fixed an issue with events leading to a machine being put in its final configuration not being added to the appropriate exit actions.

- Updated dependencies [[`a5f091f`](https://github.com/statelyai/xstate-tools/commit/a5f091f0606a183d62dce7dcf45c57474bffab04)]:
  - @xstate/tools-shared@1.2.1

## 1.9.0

### Minor Changes

- [#114](https://github.com/statelyai/xstate-tools/pull/114) [`267db6b`](https://github.com/statelyai/xstate-tools/commit/267db6b00f6f7fda1145e0631638620b7649afe0) Thanks [@mattpocock](https://github.com/mattpocock)! - Gave typegen the ability to calculate all of the events which can fire exit actions.

* [#189](https://github.com/statelyai/xstate-tools/pull/189) [`4ed3d9b`](https://github.com/statelyai/xstate-tools/commit/4ed3d9b9c3530569cd878d98b319b011d1edfb3a) Thanks [@farskid](https://github.com/farskid)! - Adds a setting to sync the visual editor theme with the VS Code theme

- [#188](https://github.com/statelyai/xstate-tools/pull/188) [`e54ce0d`](https://github.com/statelyai/xstate-tools/commit/e54ce0d03040a62dd045ad892c9533305081109e) Thanks [@mellson](https://github.com/mellson)! - Changes made outside VS Code are now sent to the visual editor.

* [#144](https://github.com/statelyai/xstate-tools/pull/144) [`0af1105`](https://github.com/statelyai/xstate-tools/commit/0af1105ddba0c00a04bfa11470261a69d15abc1f) Thanks [@mellson](https://github.com/mellson)! - Added a snippet, xsm, to create a working machine you can edit using the visual editor in seconds.

### Patch Changes

- [#170](https://github.com/statelyai/xstate-tools/pull/170) [`bd0972c`](https://github.com/statelyai/xstate-tools/commit/bd0972c) Thanks [@Andarist](https://github.com/Andarist)! - Fixed a couple of issues with entry and exit actions not having the appropriate event types associated with them in the generated typegen information. Those issues were mainly related to actions defined on the "path" in the machine in between the source and target states.

* [#182](https://github.com/statelyai/xstate-tools/pull/182) [`fa09f36`](https://github.com/statelyai/xstate-tools/commit/fa09f3648fba735ec205819c3660b20cfac3f6fe) Thanks [@Andarist](https://github.com/Andarist)! - Fixed an issue with some entry actions between the target and the resolved leaf not having the appropriate event types associated them in the generated typegen information.

* Updated dependencies [[`267db6b`](https://github.com/statelyai/xstate-tools/commit/267db6b00f6f7fda1145e0631638620b7649afe0), [`2e1a1f5`](https://github.com/statelyai/xstate-tools/commit/2e1a1f5554481867d3d77916e00c36c98b497f5a), [`fa09f36`](https://github.com/statelyai/xstate-tools/commit/fa09f3648fba735ec205819c3660b20cfac3f6fe)]:
  - @xstate/tools-shared@1.2.0

## 1.8.3

### Patch Changes

- [#164](https://github.com/statelyai/xstate-tools/pull/164) [`74b013b`](https://github.com/statelyai/xstate-tools/commit/74b013b74632e1ac87543dedfc54da8c3e3764dc) Thanks [@mellson](https://github.com/mellson)! - Added learn more link to file nesting prompt.

## 1.8.2

### Patch Changes

- [#156](https://github.com/statelyai/xstate-tools/pull/156) [`6a9a761`](https://github.com/statelyai/xstate-tools/commit/6a9a7610c412ff0ce420be4c08c108c95648a2cf) Thanks [@mellson](https://github.com/mellson)! - Added functionality to allow the editor to communicate with the VS Code extension.

* [#146](https://github.com/statelyai/xstate-tools/pull/146) [`97df9bb`](https://github.com/statelyai/xstate-tools/commit/97df9bbd2942d7414f5a3dfdfbd5e57792d61279) Thanks [@mellson](https://github.com/mellson)! - Added a setting and a helper prompt to enable file nesting of typegen files.

- [#129](https://github.com/statelyai/xstate-tools/pull/129) [`117c89a`](https://github.com/statelyai/xstate-tools/commit/117c89a340d794b5c679b41b51b13619f49c8fd6) Thanks [@mattpocock](https://github.com/mattpocock)! - Fixed a bug where children of states entered from transitions would not have their entry actions or invocations typed properly.

- Updated dependencies [[`117c89a`](https://github.com/statelyai/xstate-tools/commit/117c89a340d794b5c679b41b51b13619f49c8fd6)]:
  - @xstate/tools-shared@1.1.7

## 1.8.1

### Patch Changes

- [`2241137`](https://github.com/statelyai/xstate-tools/commit/22411372fd36490c21ff1ab63cbcc779448074f4) Thanks [@mattpocock](https://github.com/mattpocock)! - Fixed a failed deploy

## 1.8.0

### Minor Changes

- [#151](https://github.com/statelyai/xstate-tools/pull/151) [`795a057`](https://github.com/statelyai/xstate-tools/commit/795a057f73f0a38784548a1fcf055757f44d0647) Thanks [@mattpocock](https://github.com/mattpocock)! - Added parsing for the `@xstate/test` `createTestMachine` function

### Patch Changes

- Updated dependencies []:
  - @xstate/tools-shared@1.1.6

## 1.7.6

### Patch Changes

- [#140](https://github.com/statelyai/xstate-tools/pull/140) [`e073819`](https://github.com/statelyai/xstate-tools/commit/e0738191c61290c8f5a9ecdd507e6418ab551518) Thanks [@Andarist](https://github.com/Andarist)! - Fixed an issue with not being able to parse type-only import/export specifiers.

* [#130](https://github.com/statelyai/xstate-tools/pull/130) [`99e4cb5`](https://github.com/statelyai/xstate-tools/commit/99e4cb57f3590448ddbcdc85a3104d29ef0fa79c) Thanks [@mattpocock](https://github.com/mattpocock)! - Fixed a bug where actions and conditions inside `choose` inside machine options would not be found in typegen.

* Updated dependencies [[`99e4cb5`](https://github.com/statelyai/xstate-tools/commit/99e4cb57f3590448ddbcdc85a3104d29ef0fa79c)]:
  - @xstate/tools-shared@1.1.5

## 1.7.5

### Patch Changes

- [#122](https://github.com/statelyai/xstate-tools/pull/122) [`a725a19`](https://github.com/statelyai/xstate-tools/commit/a725a19ee6d5d6ad51a42cc8b40deeb5d6ae6215) Thanks [@mattpocock](https://github.com/mattpocock)! - Fixed an issue where warnings for meta properties would still show even if the user had turned off visual editor warnings.

* [#126](https://github.com/statelyai/xstate-tools/pull/126) [`c705a64`](https://github.com/statelyai/xstate-tools/commit/c705a64d95fa99046a7acd77f16b9b0dddd2e7ba) Thanks [@ericjonathan6](https://github.com/ericjonathan6)! - Fixed a bug where descriptions on transitions were not being visualised in VSCode.

- [#118](https://github.com/statelyai/xstate-tools/pull/118) [`58628f1`](https://github.com/statelyai/xstate-tools/commit/58628f182faeace8e61c995172995f98c9d623af) Thanks [@Andarist](https://github.com/Andarist)! - Fixed issues with typegen generation for quotes in tags and state names.

* [#128](https://github.com/statelyai/xstate-tools/pull/128) [`2d88c75`](https://github.com/statelyai/xstate-tools/commit/2d88c75bb475cd8cee74677b293aaffe124b4d3b) Thanks [@Andarist](https://github.com/Andarist)! - Fixed issues with typegen generation for quotes in actions, delays, guards, services and event types.

* Updated dependencies [[`58628f1`](https://github.com/statelyai/xstate-tools/commit/58628f182faeace8e61c995172995f98c9d623af), [`2d88c75`](https://github.com/statelyai/xstate-tools/commit/2d88c75bb475cd8cee74677b293aaffe124b4d3b), [`7a7f308`](https://github.com/statelyai/xstate-tools/commit/7a7f308672540d95a1c9292a32c60d31c5208d13)]:
  - @xstate/tools-shared@1.1.4

## 1.7.4

### Patch Changes

- [#109](https://github.com/statelyai/xstate-tools/pull/109) [`a4f96cb`](https://github.com/statelyai/xstate-tools/commit/a4f96cb763ca6ef39912d80008d5d84378bbc9be) Thanks [@Andarist](https://github.com/Andarist)! - Fixed support for experimental `.cts` and `.mts` extensions.

- Updated dependencies [[`a4f96cb`](https://github.com/statelyai/xstate-tools/commit/a4f96cb763ca6ef39912d80008d5d84378bbc9be)]:
  - @xstate/tools-shared@1.1.3

## 1.7.3

### Patch Changes

- [#99](https://github.com/statelyai/xstate-tools/pull/99) [`5332727`](https://github.com/statelyai/xstate-tools/commit/5332727a7ad1d4ff00c81e006edc6ffb66f5da88) Thanks [@mattpocock](https://github.com/mattpocock)! - Fixed an issue where property keys passed an incorrect type would silently fail

* [#100](https://github.com/statelyai/xstate-tools/pull/100) [`335f349`](https://github.com/statelyai/xstate-tools/commit/335f34934589dbb5c3e9685524c72b9a1badbc0e) Thanks [@mattpocock](https://github.com/mattpocock)! - Fixed a bug where inline guards were not being picked up in non-root events.

* Updated dependencies []:
  - @xstate/tools-shared@1.1.2

## 1.7.2

### Patch Changes

- [#84](https://github.com/statelyai/xstate-tools/pull/84) [`a73fce8`](https://github.com/statelyai/xstate-tools/commit/a73fce843ee04b0701d9d72046da422ff3a65eed) Thanks [@Andarist](https://github.com/Andarist)! - Fixed a bug where transition targets would not be parsed correctly if they were declared using a template literal.

- Updated dependencies []:
  - @xstate/tools-shared@1.1.1

## 1.7.1

### Patch Changes

- [#82](https://github.com/statelyai/xstate-tools/pull/82) [`e49beb2`](https://github.com/statelyai/xstate-tools/commit/e49beb28551ef11b66a158ad2fcac4a5242edb44) Thanks [@mattpocock](https://github.com/mattpocock)! - Fixed a bug where prettier was not found in the server bundle, causing an irrecoverable error on startup.

## 1.7.0

### Minor Changes

- [`a1c9de6`](https://github.com/statelyai/xstate-tools/commit/a1c9de6ab1130159da5f59f399869ebbfeaa4281) Thanks [@mattpocock](https://github.com/mattpocock)! - Allowed for parsing and rewriting inline implementations in the VSCode extension. This allows you to use either named actions (which were already supported):

  ```ts
  createMachine({
    entry: ['sayHello'],
  });
  ```

  Or inline actions:

  ```ts
  createMachine({
    entry: [
      () => {
        console.log('Hello!');
      },
    ],
  });
  ```

  Both can now be handled in the VSCode extension. This is true for inline actions, services and guards.

### Patch Changes

- [#69](https://github.com/statelyai/xstate-tools/pull/69) [`2210d4b`](https://github.com/statelyai/xstate-tools/commit/2210d4b5175384f87dc0b001ba68400701c35818) Thanks [@mattpocock](https://github.com/mattpocock)! - Fixed issue where tags appeared to be deleted when changes were made in VSCode.

- Updated dependencies [[`a3b874b`](https://github.com/statelyai/xstate-tools/commit/a3b874b328cd6bf409861378ab2840dab70d3ff3)]:
  - @xstate/tools-shared@1.1.0
