import { Property } from 'csstype'

export interface ITheme {
  fontSettings: {
    size: Record<string, Property.FontSize>;
    weight: Record<string, Property.FontWeight>;
  }
  padding: Record<string, Property.Padding>;
  spacing: Record<string, number>;
  colors: Record<string, Property.Color>;
  decoration: {
    borderRadius: Record<string, Property.BorderRadius>;
    backdropFilter: Record<string, Property.BackdropFilter>;
    boxShadow: Record<string, Property.BoxShadow>;
    gradient: Record<string, any>
    lineHeight: Record<string, Property.LineHeight>
  };
}
