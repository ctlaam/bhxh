
export default async function ({ store }) {
    if (!store.state.profile.profile) {
        await store.dispatch('profile/saveProfile')
    }
}