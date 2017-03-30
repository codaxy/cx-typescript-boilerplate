import {register} from '../registry';

import {
    cx,
    Calendar,
    Checkbox,
    ColorField,
    ColorPicker,
    DateField,
    LookupField,
    MonthField,
    MonthPicker,
    NumberField,
    Radio,
    Select,
    TextArea,
    TextField,
    Slider,
    Switch,
    Section,
    FlexRow
} from "cx/widgets";

import {LabelsLeftLayout, LabelsTopLayout} from "cx/ui";


register('Form Fields', 'Forms', <cx>
    <h2 putInto="header">Form Fields</h2>
    <div class="example pad wrap">
        <h3>Fields</h3>
        <FlexRow wrap spacing="large">
            <Section mod="well" header={{ level: 4, text: 'Textual'}} layout={{type: LabelsTopLayout, vertical: true}}>
                <TextField label="TextField" value={{ bind: "text" }}/>
                <TextArea label="TextArea" value={{ bind: "text2" }} rows={3}/>
            </Section>

            <Section mod="well" header={{ level: 4, text: "Numeric"}} layout={{type: LabelsTopLayout, vertical: true}}>
                <NumberField label="NumberField" value={{ bind: "number" }}/>
                <Slider label="Slider" value={{ bind: "number" }}/>
            </Section>

            <Section mod="well" header={{ level: 4, text: "Select"}} layout={{type: LabelsTopLayout, vertical: true}}>
                <Select label="Select" value={{ bind: "radio" }}>
                    <option value={1}>Option 1</option>
                    <option value={2}>Option 2</option>
                </Select>
                <LookupField
                    label="LookupField"
                    value={{ bind: "radio" }}
                    options={[ { id: 1, text: "Option 1" }, { id: 2, text: "Option 2" } ]}
                />
                <LookupField
                    label="LookupField (multiple)"
                    multiple
                    values={{ bind: "options" }}
                    options={[ { id: 1, text: "Option 1" }, { id: 2, text: "Option 2" } ]}
                />
            </Section>

            <Section mod="well" header={{ level: 4, text: "Dropdowns"}}
                     layout={{type: LabelsTopLayout, vertical: true}}>
                <DateField label="DateField" value={{ bind: "date" }}/>
                <MonthField
                    label="MonthField"
                    range
                    from={{ bind: "dateFrom" }}
                    to={{ bind: "dateTo" }}
                />
                <ColorField label="ColorField" value={{ bind: "color" }}/>
            </Section>

            <Section mod="well" header={{ level: 4, text: "Switches"}} layout={{type: LabelsTopLayout, vertical: true}}
                     style="width: 300px">
                <Checkbox value={{ bind: "checked" }}>Checkbox</Checkbox>
                <Switch value={{ bind: "checked" }}>Switch</Switch>
                <Radio label="Radio" value={{ bind: "radio" }} option={1}>Option 1</Radio>
                <Radio value={{ bind: "radio"}} option={2}>Option 2</Radio>
            </Section>

        </FlexRow>


        <h3 style={{marginTop: "3rem"}}>Standalone</h3>

        <FlexRow wrap spacing="large">

            <Section mod="well" header={{ level: 4, text: "Calendar"}} layout={{type: LabelsTopLayout, vertical: true}}>
                <Calendar value={{ bind: "date" }}/>
            </Section>

            <Section mod="well" header={{ level: 4, text: "MonthPicker"}}
                     layout={{type: LabelsTopLayout, vertical: true}}>
                <MonthPicker
                    range
                    from={{ bind: "dateFrom" }}
                    to={{ bind: "dateTo" }}
                    style="height:21rem"
                />
            </Section>

            <Section mod="well" header={{ level: 4, text: "ColorPicker"}}
                     layout={{type: LabelsTopLayout, vertical: true}}>
                <ColorPicker value={{ bind: "color" }}/>
            </Section>
        </FlexRow>
    </div>
</cx>);









