export const load = async ({ fetch }) => {
    const response = await fetch(`https://fastly.jsdelivr.net/gh/BigCoke233/guhub/data/friends.json`)
    const links = await response.json()
  
    return {
      links
    }
}