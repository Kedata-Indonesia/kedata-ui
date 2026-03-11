<script setup>
import { ChatBubble } from '@kedataindo/vue';
</script>

# Chat Bubble

A message bubble for chat interfaces.

## Basic Usage

<ClientOnly>
  <div class="demo-box flex-col items-start w-full">
    <ChatBubble variant="sent" time="10:30 AM">
      Hello! How are you?
    </ChatBubble>
    <ChatBubble variant="received" time="10:31 AM">
      I'm doing great, thank you!
    </ChatBubble>
    <ChatBubble variant="sent" time="10:32 AM">
      That's wonderful to hear. What are you up to today?
    </ChatBubble>
  </div>
</ClientOnly>

```vue
<ChatBubble variant="sent" time="10:30 AM">
  Hello! How are you?
</ChatBubble>
<ChatBubble variant="received" time="10:31 AM">
  I'm doing great, thank you!
</ChatBubble>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `ChatBubbleVariant` | - | `'sent'` or `'received'` |
| `time` | `string` | - | Message timestamp |
| `id` | `string` | - | Element ID |
| `class` | `string` | - | Additional CSS classes |
| `withParts` | `boolean` | `true` | Use default styling |
