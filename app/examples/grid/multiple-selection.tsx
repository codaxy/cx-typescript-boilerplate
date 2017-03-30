import {register} from '../registry';

import {cx, Checkbox, Grid} from "cx/widgets";
import {Controller, PropertySelection} from "cx/ui";
import casual from '../casual';

class PageController extends Controller {
    onInit() {
        this.store.set(
            "$page.records",
            Array
                .from({length: 10})
                .map(() => ({
                    fullName: casual.full_name,
                    phone: casual.phone,
                    city: casual.city,
                    selected: false
                }))
        );

        this.addTrigger('select-all-click', ['$page.selectAll'], (value) => {
            if (value != null)
                this.store.set('$page.records', this.store.get('$page.records')
                    .map(r => Object.assign({}, r, {selected: value})));
        });

        this.addTrigger('item-click', ['$page.records'], (records) => {
            if (records.every(a => a.selected))
                this.store.set('$page.selectAll', true);
            else if (records.every(a => !a.selected))
                this.store.set('$page.selectAll', false);
            else
                this.store.set('$page.selectAll', null);
        }, true);
    }
}

register('Multiple Selection', 'Grid', <cx>
        <h2 putInto="header">Form Fields</h2>
        <div class="example pad wrap" controller={PageController}>
            <Grid
                records={{bind:"$page.records"}}
                style={{ width: "100%" }}
                columns={[
                    {
                        header: {
                            items: <cx><Checkbox value={{ bind: "$page.selectAll" }} indeterminate /></cx>
                        },
                        field: "selected",
                        items: <cx><Checkbox value={{ bind: "$record.selected" }}/></cx>
                    },
                    { header: "Name", field: "fullName", sortable: true },
                    { header: "Phone", field: "phone" },
                    { header: "City", field: "city", sortable: true }
                ]}
                selection={
                    { type: PropertySelection, bind: "$page.selection", multiple: true }
                }
                sorters={{ bind: "$page.sorters" }}
            />
        </div>
    </cx>
);









