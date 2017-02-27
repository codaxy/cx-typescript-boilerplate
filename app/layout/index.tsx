import { HtmlElement } from 'cx-core/widgets';
import { ContentPlaceholder } from 'cx-core/ui';

console.log(HtmlElement);

export default <cx>
   <div class="app">
      <header class="header">
         <h1>Cx App</h1>
      </header>
      <ContentPlaceholder />
   </div>
</cx>
