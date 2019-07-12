/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import Calendar from './calendar/pt_PT';
import DatePicker from './date-picker/pt_PT';
import Pagination from './pagination/pt_PT';
import TimePicker from './time-picker/pt_PT';
export default {
    locale: 'pt',
    Pagination,
    DatePicker,
    TimePicker,
    Calendar,
    Table: {
        filterTitle: 'Filtro',
        filterConfirm: 'Aplicar',
        filterReset: 'Reiniciar',
        emptyText: 'Sem resultados',
        selectAll: 'Selecionar página atual',
        selectInvert: 'Inverter seleção',
    },
    Modal: {
        okText: 'OK',
        cancelText: 'Cancelar',
        justOkText: 'OK',
    },
    Popconfirm: {
        okText: 'OK',
        cancelText: 'Cancelar',
    },
    Transfer: {
        notFoundContent: 'Sem resultados',
        searchPlaceholder: 'Procurar...',
        itemUnit: 'item',
        itemsUnit: 'itens',
    },
    Select: {
        notFoundContent: 'Sem resultados',
    },
    Upload: {
        uploading: 'A carregar...',
        removeFile: 'Remover',
        uploadError: 'Erro ao carregar',
        previewFile: 'Pré-visualizar',
    },
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHRfUFQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaTE4bi9sYW5ndWFnZXMvcHRfUFQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sUUFBUSxNQUFNLGtCQUFrQixDQUFDO0FBQ3hDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBQzdDLE9BQU8sVUFBVSxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sVUFBVSxNQUFNLHFCQUFxQixDQUFDO0FBRTdDLGVBQWU7SUFDYixNQUFNLEVBQUUsSUFBSTtJQUNaLFVBQVU7SUFDVixVQUFVO0lBQ1YsVUFBVTtJQUNWLFFBQVE7SUFDUixLQUFLLEVBQUU7UUFDTCxXQUFXLEVBQUUsUUFBUTtRQUNyQixhQUFhLEVBQUUsU0FBUztRQUN4QixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsZ0JBQWdCO1FBQzNCLFNBQVMsRUFBRSx5QkFBeUI7UUFDcEMsWUFBWSxFQUFFLGtCQUFrQjtLQUNqQztJQUNELEtBQUssRUFBRTtRQUNMLE1BQU0sRUFBRSxJQUFJO1FBQ1osVUFBVSxFQUFFLFVBQVU7UUFDdEIsVUFBVSxFQUFFLElBQUk7S0FDakI7SUFDRCxVQUFVLEVBQUU7UUFDVixNQUFNLEVBQUUsSUFBSTtRQUNaLFVBQVUsRUFBRSxVQUFVO0tBQ3ZCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsZUFBZSxFQUFFLGdCQUFnQjtRQUNqQyxpQkFBaUIsRUFBRSxhQUFhO1FBQ2hDLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFNBQVMsRUFBRSxPQUFPO0tBQ25CO0lBQ0QsTUFBTSxFQUFFO1FBQ04sZUFBZSxFQUFFLGdCQUFnQjtLQUNsQztJQUNELE1BQU0sRUFBRTtRQUNOLFNBQVMsRUFBRSxlQUFlO1FBQzFCLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFdBQVcsRUFBRSxrQkFBa0I7UUFDL0IsV0FBVyxFQUFFLGdCQUFnQjtLQUM5QjtDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FsZW5kYXIgZnJvbSAnLi9jYWxlbmRhci9wdF9QVCc7XHJcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJy4vZGF0ZS1waWNrZXIvcHRfUFQnO1xyXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL3BhZ2luYXRpb24vcHRfUFQnO1xyXG5pbXBvcnQgVGltZVBpY2tlciBmcm9tICcuL3RpbWUtcGlja2VyL3B0X1BUJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBsb2NhbGU6ICdwdCcsXHJcbiAgUGFnaW5hdGlvbixcclxuICBEYXRlUGlja2VyLFxyXG4gIFRpbWVQaWNrZXIsXHJcbiAgQ2FsZW5kYXIsXHJcbiAgVGFibGU6IHtcclxuICAgIGZpbHRlclRpdGxlOiAnRmlsdHJvJyxcclxuICAgIGZpbHRlckNvbmZpcm06ICdBcGxpY2FyJyxcclxuICAgIGZpbHRlclJlc2V0OiAnUmVpbmljaWFyJyxcclxuICAgIGVtcHR5VGV4dDogJ1NlbSByZXN1bHRhZG9zJyxcclxuICAgIHNlbGVjdEFsbDogJ1NlbGVjaW9uYXIgcMOhZ2luYSBhdHVhbCcsXHJcbiAgICBzZWxlY3RJbnZlcnQ6ICdJbnZlcnRlciBzZWxlw6fDo28nLFxyXG4gIH0sXHJcbiAgTW9kYWw6IHtcclxuICAgIG9rVGV4dDogJ09LJyxcclxuICAgIGNhbmNlbFRleHQ6ICdDYW5jZWxhcicsXHJcbiAgICBqdXN0T2tUZXh0OiAnT0snLFxyXG4gIH0sXHJcbiAgUG9wY29uZmlybToge1xyXG4gICAgb2tUZXh0OiAnT0snLFxyXG4gICAgY2FuY2VsVGV4dDogJ0NhbmNlbGFyJyxcclxuICB9LFxyXG4gIFRyYW5zZmVyOiB7XHJcbiAgICBub3RGb3VuZENvbnRlbnQ6ICdTZW0gcmVzdWx0YWRvcycsXHJcbiAgICBzZWFyY2hQbGFjZWhvbGRlcjogJ1Byb2N1cmFyLi4uJyxcclxuICAgIGl0ZW1Vbml0OiAnaXRlbScsXHJcbiAgICBpdGVtc1VuaXQ6ICdpdGVucycsXHJcbiAgfSxcclxuICBTZWxlY3Q6IHtcclxuICAgIG5vdEZvdW5kQ29udGVudDogJ1NlbSByZXN1bHRhZG9zJyxcclxuICB9LFxyXG4gIFVwbG9hZDoge1xyXG4gICAgdXBsb2FkaW5nOiAnQSBjYXJyZWdhci4uLicsXHJcbiAgICByZW1vdmVGaWxlOiAnUmVtb3ZlcicsXHJcbiAgICB1cGxvYWRFcnJvcjogJ0Vycm8gYW8gY2FycmVnYXInLFxyXG4gICAgcHJldmlld0ZpbGU6ICdQcsOpLXZpc3VhbGl6YXInLFxyXG4gIH0sXHJcbn07XHJcbiJdfQ==