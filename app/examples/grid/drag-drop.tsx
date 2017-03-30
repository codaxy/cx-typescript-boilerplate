import {register} from '../registry';

import { Controller, KeySelection } from 'cx/ui';
import { cx, DragHandle, FlexRow, Grid, HtmlElement, Rescope } from 'cx/widgets';

function insertElement(array, index, ...args) {
  return [ ...array.slice(0, index), ...args, ...array.slice(index) ];
}

function move(store, target, e) {
  let selection = e.source.records.map(r => r.data);

  store.update(
    e.source.data.source,
    array => array.filter((a, i) => selection.indexOf(a) == -1)
  );

  if (e.source.data.source == target) e.source.records.forEach(record => {
      if (record.index < e.target.insertionIndex) e.target.insertionIndex--;
    });

  store.update(target, insertElement, e.target.insertionIndex, ...selection);
}

class PageController extends Controller {
  init() {
    this.store.init(
      "grid1",
      Array.from({ length: 15 }, (_, c) => ({
        id: c + 1,
        name: "Item " + (c + 1),
        number: Math.random() * 100
      }))
    );

    this.store.init(
      "grid2",
      Array.from({ length: 15 }, (_, c) => ({
        id: 10000 + c + 1,
        name: "Item " + (c + 1),
        number: Math.random() * 100
      }))
    );
  }
}

register('Drag and Drop', 'Grid', <cx>
    <h2 putInto="header">Grid Drag &amp; Drop</h2>
    <Rescope bind="$page">
    <div class="example pad" controller={PageController}>
      <FlexRow>
        <Grid
          records={{bind:"grid1"}}
          columns={
            [
              {
                field: "name",
                header: "Name",
                sortable: true,
                style: "width: 300px"
              },
              {
                field: "number",
                header: "Number",
                format: "n;2",
                sortable: true,
                align: "right"
              }
            ]
          }
          dragSource={{ data: { type: "record", source: "grid1" } }}
          onDropTest={e => e.source.data.type == "record"}
          onDrop={(e, { store }) => move(store, "grid1", e)}
          selection={{ type: KeySelection, multiple: true, bind: "s1" }}
        />
        <div style={{width:"100px"}} />
        <Grid
          records={{bind:"grid2"}}
          columns={[
              {
                items: (
                  <cx>
                    <DragHandle style="cursor:move">
                      ☰
                    </DragHandle>
                  </cx>
                )
              },
              {
                style: "width: 300px",
                field: "name",
                header: "Name",
                sortable: true
              },
              {
                field: "number",
                header: "Number",
                format: "n;2",
                sortable: true,
                align: "right"
              }
            ]}
          dragSource={
            { mode: "copy", data: { type: "record", source: "grid2" } }
          }
          dropZone={{ mode: "insertion" }}
          onDropTest={e => e.source.data.type == "record"}
          onDrop={(e, { store }) => move(store, "grid2", e)}
        />
      </FlexRow>
      </div>
      </Rescope>
    </cx>
);









