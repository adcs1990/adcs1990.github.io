export class EventFirer{
    static dispatchEvent(from, eventName, data){
        from.dispatchEvent(
            new CustomEvent(eventName, {
              bubbles: true,
              composed: true,
              detail: {
                data: data,
              },
            })
          );
    }
}