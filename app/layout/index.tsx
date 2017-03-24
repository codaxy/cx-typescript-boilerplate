import { HtmlElement } from 'cx/widgets';
import { ContentPlaceholder } from 'cx/ui';

console.log(HtmlElement);

export default <cx>
   <div class="app">
      <header class="header">
         <h1>Cx App</h1>
      </header>
      <ContentPlaceholder />
   </div>
</cx>
