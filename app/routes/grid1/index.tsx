import { createModel } from "cx/data";
import {
  FlexCol,
  FlexRow,
  Section,
  Grid,
  TextField,
  DateField,
  MonthField,
  Pagination,
  Select,
} from "cx/widgets";

import Controller from "./Controller";

interface GridPageModel {
  $page: {
    filter: {
      search: string;
      date: string;
      fromDate: string;
      toDate: string;
      page: number;
      pageSize: number;
      pageCount: number;
    };
    data: Array<{
      field1: string;
      field2: number;
      field3: number;
      field4: number;
    }>;
  };
}

const m = createModel<GridPageModel>();

export default (
  <cx>
    <FlexCol controller={Controller} style="height: 100%" spacing="large">
      <h2 putInto="header">Grid</h2>
      <Section mod="card">
        <FlexRow spacing>
          <TextField
            placeholder="Search..."
            value={m.$page.filter.search}
            showClear
          />
          <DateField placeholder="Date" value={m.$page.filter.date} />
          <MonthField
            placeholder="Period"
            range
            from={m.$page.filter.fromDate}
            to={m.$page.filter.toDate}
          />
        </FlexRow>
      </Section>
      <Section
        mod="card"
        style="flex: 1 1 0"
        pad={false}
        bodyStyle="display: flex"
      >
        <Grid
          style="flex: 1 1 0; border: none"
          scrollable
          records={m.$page.data}
          columns={[
            {
              header: "Column1",
              field: "field1",
              sortable: true,
            },
            {
              header: "Column2",
              field: "field2",
              sortable: true,
              format: "currency;USD;2",
              align: "right",
            },
            {
              header: "Column3",
              field: "field3",
              sortable: true,
              format: "n;2",
              align: "right",
            },
            {
              header: "Column4",
              field: "field4",
              sortable: true,
              format: "p;2",
              align: "right",
            },
          ]}
          emptyText="No data to show"
        />
      </Section>
      <Section mod="card" bodyStyle="display: flex; align-items: center">
        <Pagination
          page={m.$page.filter.page}
          pageCount={m.$page.filter.pageCount}
        />
        <Select
          value={m.$page.filter.pageSize}
          style="margin-left: auto; width: 50px"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
        </Select>
        <span>records per page</span>
      </Section>
    </FlexCol>
  </cx>
);
