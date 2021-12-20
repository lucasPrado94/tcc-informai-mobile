export function formataDataBR(createdAt: string) {
    const date = new Date(createdAt);

    var day = date.getDate().toString().padStart(2, '0'),
        month = (date.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
        year = date.getFullYear();
    return `${day}/${month}/${year}`
}