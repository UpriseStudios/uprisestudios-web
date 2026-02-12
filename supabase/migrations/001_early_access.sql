create extension if not exists pgcrypto;

-- Early access registrations
-- Stores encrypted emails only (no plaintext), plus a hash for de-duplication.
create table if not exists public.early_access_registrations (
  id uuid primary key default gen_random_uuid(),
  campaign text not null,
  encrypted_email text not null,
  email_hash text not null,
  created_at timestamptz not null default now(),
  notified_at timestamptz null
);

create unique index if not exists early_access_unique on public.early_access_registrations (campaign, email_hash);

-- Optional: simple RLS. Since we're using Service Role in server routes, this is not required,
-- but it's a good default if you later switch to anon inserts.
alter table public.early_access_registrations enable row level security;

-- Allow inserts from anon if you ever want client-side signups.
-- For now, keep locked down; server-only inserts recommended.
drop policy if exists "ea_insert" on public.early_access_registrations;
create policy "ea_insert" on public.early_access_registrations
for insert to anon
with check (false);

drop policy if exists "ea_select" on public.early_access_registrations;
create policy "ea_select" on public.early_access_registrations
for select to anon
using (false);
