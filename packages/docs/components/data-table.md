<script setup>
import { ref } from 'vue';
import { DataTable } from '@kedataindo/vue';

const page = ref(1);
const pageSize = ref(10);
const sortBy = ref('');
const sortType = ref('asc');

const columns = [
  { name: 'name', label: 'Name', sortable: true },
  { name: 'email', label: 'Email' },
  { name: 'role', label: 'Role' },
];

const data = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Editor' },
  { id: 4, name: 'David Brown', email: 'david@example.com', role: 'User' },
  { id: 5, name: 'Eve Davis', email: 'eve@example.com', role: 'Admin' },
];
</script>

# Data Table

A feature-rich table with sorting, pagination, and customizable columns.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start w-full">
    <DataTable
      :columns="columns"
      :data="data"
      rowKey="id"
      v-model:page="page"
      v-model:pageSize="pageSize"
      v-model:sortBy="sortBy"
      v-model:sortType="sortType"
    />
  </div>
</ClientOnly>

```vue
<script setup>
import { ref } from 'vue';
import { DataTable } from '@kedataindo/vue';

const page = ref(1);
const pageSize = ref(10);
const sortBy = ref('');
const sortType = ref('asc');

const columns = [
  { name: 'name', label: 'Name', sortable: true },
  { name: 'email', label: 'Email' },
  { name: 'role', label: 'Role' },
];

const data = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
];
</script>

<DataTable
  :columns="columns"
  :data="data"
  rowKey="id"
  v-model:page="page"
  v-model:pageSize="pageSize"
  v-model:sortBy="sortBy"
  v-model:sortType="sortType"
/>
```

## With Pagination

<ClientOnly>
  <div class="demo-box flex-col items-start w-full">
    <DataTable
      :columns="columns"
      :data="data"
      rowKey="id"
      pagination
      :totalData="50"
      v-model:page="page"
      v-model:pageSize="pageSize"
      v-model:sortBy="sortBy"
      v-model:sortType="sortType"
    />
  </div>
</ClientOnly>

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `columns` | `DataTableColumn[]` | Required | Column definitions |
| `data` | `Record<string, any>[]` | Required | Table data |
| `rowKey` | `string` | - | Unique row identifier field |
| `pagination` | `boolean` | `false` | Show pagination |
| `totalData` | `number` | - | Total record count |
| `fixedHeader` | `boolean` | `false` | Fixed table header |
| `class` | `string` | - | Additional CSS classes |

## Models

| Model | Type | Description |
|-------|------|-------------|
| `page` | `number` | Current page |
| `pageSize` | `number` | Items per page |
| `sortBy` | `string` | Sort column name |
| `sortType` | `'asc' \| 'desc'` | Sort direction |

## Column Definition

```ts
type DataTableColumn = {
  name: string;       // Field name in data object
  label: string;      // Column header text
  width?: string;     // Column width (CSS value)
  sortable?: boolean; // Enable sorting
  renderCell?: (value: any, row: Record<string, any>) => VNode;
  renderLabel?: (column: DataTableColumn) => VNode;
};
```
