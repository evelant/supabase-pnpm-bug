// error importing re-exported types from realtime-js functions-js and gotrue-js
import type {
  RealtimeChannel,
  RealtimePostgresChangesPayload,
} from "@supabase/supabase-js";
// no problem with types from the package
import { createClient } from "@supabase/supabase-js";
