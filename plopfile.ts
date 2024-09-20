import type { NodePlopAPI } from 'plop';

export default function (plop: NodePlopAPI) {
  plop.setGenerator('feature component', {
    description: 'feature component',
    prompts: [
      {
        type: 'input',
        name: 'feature',
        message: 'feature name please',
      },
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{dashCase feature}}/components/{{dashCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/AtomComp.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{dashCase feature}}/components/{{dashCase name}}/use{{pascalCase name}}.ts',
        templateFile: 'plop-templates/AtomCompHook.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{dashCase feature}}/components/{{dashCase name}}/{{pascalCase name}}.stories.ts',
        templateFile: 'plop-templates/AtomCompStory.hbs',
      },
    ],
  });
  plop.setGenerator('shared component', {
    description: 'shared component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/shared/components/{{dashCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/AtomComp.hbs',
      },
      {
        type: 'add',
        path: 'src/shared/components/{{dashCase name}}/use{{pascalCase name}}.ts',
        templateFile: 'plop-templates/AtomCompHook.hbs',
      },
      {
        type: 'add',
        path: 'src/shared/components/{{dashCase name}}/{{pascalCase name}}.stories.ts',
        templateFile: 'plop-templates/AtomCompStory.hbs',
      },
    ],
  });
  plop.setGenerator('container', {
    description: 'feature container ',
    prompts: [
      {
        type: 'input',
        name: 'feature',
        message: 'feature name please',
      },
      {
        type: 'input',
        name: 'name',
        message: 'container name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/features/{{dashCase feature}}/containers/{{dashCase name}}-page/{{pascalCase name}}Page.tsx',
        templateFile: 'plop-templates/AtomCompPage.hbs',
      },
      {
        type: 'add',
        path: 'src/features/{{dashCase feature}}/containers/{{dashCase name}}-page/use{{pascalCase name}}Page.ts',
        templateFile: 'plop-templates/AtomCompPageHook.hbs',
      },
    ],
  });
}
